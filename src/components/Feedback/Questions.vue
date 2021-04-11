<template>
  <div class="questions neomorphism">
      <textarea class="neomorphismInset" placeholder="Ваш вопрос или комментарий" />
      <div class="topSecret">
          <img src="../../assets/icon/top-secret.svg" alt="top-secret icon">
          <div class="text">
              <p>Конфиденциальность</p>
              <p>Мы обязуемся не передавать полученную информацию и контактные данные третьим лицам</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Questions'
}
</script>

<style scoped>
textarea {
    width: 595px;
    height: 418px;
    resize: none;
    border: none;
    outline: none;
    background: none;
    padding: 20px;
    font-family: inherit;
    font-size: 21px;
    color: #555555;
}

.topSecret {
    margin-top: 20px;
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 20px;
}

img {
    transform: rotate(-15deg);
}

.text {
    opacity: .5;
}

.text p:nth-child(1) {
    font-size: 26px;
}
</style>