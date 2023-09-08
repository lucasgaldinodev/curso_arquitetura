import TerminalUtil from "@/app/util/TerminalUtil";
import MenuFundamentos from "./menuFundamentos";

export default async function MenuPrincipal() {
    TerminalUtil.titulo('Menu Principal')

    const [indice] = await TerminalUtil.menu([
        '1. Fundamentos',
        'Sair'
    ])

    switch (indice) {
        case 0: await MenuFundamentos(); break
        case 1: process.exit(0)
    }

    MenuPrincipal()
}