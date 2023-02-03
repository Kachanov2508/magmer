import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
	company: {
		type: String,
		required: [true, "Укажите название компании"],
		trim: true,
	},
	site: {
		type: String,
		required: [true, "Укажите сайт компании"],
	},
	email: {
		type: String,
		required: [true, "Укажите email"],
		unique: true,
		lowecase: true,
		match: [/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/, "Некорректный email"],
	},
	phone: {
		type: String,
		required: [true, "Укажите номер телефона"],
	},
	password: {
		type: String,
		required: [true, "Укажите пароль"],
		minLength: [5, "Пароль должен состоять минимум из 5 символов"],
	},
	role: {
		type: String,
		required: true,
		default: "Supplier",
	},
	status: {
		type: String,
		required: true,
		default: "Pending",
	},
	token: {
		type: String,
	},
});

// Хэшировать пароль и добавить токен
userSchema.pre("save", async function (next) {
	if (this.status !== "Active") {
		try {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(this.password, salt);
			this.password = hash;

			let token = await bcrypt.hash(this.email, 10);
			this.token = token.split("/").join(""); // Удаляет slash чтобы браузере не разделять на стр.

			next();
		} catch (error) {
			next(error);
		}
	}
});

// Сравнить пароли
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

// Генерация токена
userSchema.methods.generateAuthToken = function () {
	const payload = {
		id: this._id,
		company: this.company,
		site: this.site,
		email: this.email,
		phone: this.phone,
	};
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Авторизация пользователя
userSchema.statics.login = async function(email, password) {

	// Поиск по email
	const user = await this.findOne({ email });
	if(!user) {
		throw Error('Email или пароль указаны неверно');
	}

	// Сравнить пароли
	const comparePassword = await user.comparePassword(password);
	if(!comparePassword) {
		throw Error('Email или пароль указаны неверно');
	}

	// Генерация токена
	const token = await user.generateAuthToken();

	return token;
}


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
