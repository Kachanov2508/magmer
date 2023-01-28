import headerEmail from "./headerEmail";
import footerEmail from "./footerEmail";

export const confirmEmail = (email, token) => {
    const body = `
        ${headerEmail()}
        <table class="es-footer es-visible-simple-html-only" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr>
                <td class="es-stripe-html" align="center" style="padding:0;Margin:0">
                    <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                        <tr>
                        <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px">
                        <table cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                            <tr>
                            <td align="left" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                <td align="left" style="padding:0;Margin:0;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">Для завершения регистрации нажмите на кнопку ниже</p></td>
                                </tr>
                                <tr>
                                <td align="left" style="padding:0;Margin:0">
                                    <span class="msohide es-button-border-1 es-button-border" style="border-style:solid;background:#4c80a4;border-width:0px;display:inline-block;border-radius:8px;width:auto;mso-hide:all"><a href="${process.env.DOMAIN}/confirm-email?email=${email}&token=${token}" class="es-button es-button-2" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;border-style:solid;border-color:#4c80a4;border-width:10px 20px 10px 20px;display:inline-block;background:#4c80a4;border-radius:8px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Подтвердить почту</a></span>
                                </td>
                                </tr>
                            </table></td>
                            </tr>
                        </table></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        ${footerEmail()}
    `;

    return body;
}