import Header from './components/header/Header';

import './globals.css'

import '@fontsource/krona-one';

export const metadata = {
    title: 'Wev_Dev',
    description: 'This is my online portfolio.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="">
                <Header />
                {children}
            </body>
        </html>
    )
}
