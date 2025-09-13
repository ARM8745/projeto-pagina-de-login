import React, { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        // Simula uma requisição de login
        setTimeout(() => setLoading(false), 800);
    }

    function handleSocial(provider) {
        alert(`Iniciando login com ${provider}`);
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="text-gray-300">Email</span>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-red-500"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-300">Senha</span>
                    <input
                        type="password"
                        className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-red-500"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                    <label className="inline-flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span>Lembrar-me</span>
                    </label>
                    <a href="#" className="text-red-500 hover:underline">Esqueceu a senha?</a>
                </div>
                <button
                    type="submit"
                    className={`w-full mt-2 py-2 rounded-xl text-white font-semibold transition-shadow ${
                        loading ? 'opacity-70 cursor-wait' : 'shadow-md'
                    } bg-gradient-to-r from-red-600 to-red-500`}
                    disabled={loading}
                >
                    {loading ? 'Entrando...' : 'Entrar'}
                </button>
            </form>

            <div className="my-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs text-gray-300">ou entre com</div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <button
                    onClick={() => handleSocial('Google')}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-700 bg-black/50 hover:bg-red-700/10"
                    aria-label="Entrar com Google"
                    type="button"
                >
                    {/* Google SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.35 11.1H12v2.8h5.35c-.23 1.5-1.46 3.1-3.35 3.1-2.15 0-3.9-1.8-3.9-4 0-2.2 1.75-4 3.9-4 1.15 0 1.9.5 2.35 1l2-2C17.9 6.05 15.2 5 12 5 7.6 5 4 8.6 4 13s3.6 8 8 8c4 0 7.35-2.85 7.35-6.95 0-.7-.1-1.25-.0-1.95z" fill="currentColor" />
                    </svg>
                    <span className="text-sm text-white">Google</span>
                </button>
                <button
                    onClick={() => handleSocial('Facebook')}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-700 bg-black/50 hover:bg-red-700/10"
                    aria-label="Entrar com Facebook"
                    type="button"
                >
                    {/* Facebook SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34V22C18.34 21.12 22 16.99 22 12z" fill="currentColor" />
                    </svg>
                    <span className="text-sm text-white">Facebook</span>
                </button>
                <button
                    onClick={() => handleSocial('LinkedIn')}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-700 bg-black/50 hover:bg-red-700/10"
                    aria-label="Entrar com LinkedIn"
                    type="button"
                >
                    {/* LinkedIn SVG */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 17.5V10.75H5.67V17.5h2.67zM7 9.5a1.56 1.56 0 1 0 0-3.12A1.56 1.56 0 0 0 7 9.5zM18.33 17.5v-4.1c0-2.16-1.15-3.16-2.68-3.16-1.23 0-1.77.68-2.08 1.16v-1H11.3c.03.65 0 6.94 0 6.94h2.67v-3.87c0-.21.02-.42.08-.57.18-.42.6-.85 1.3-.85.92 0 1.29.64 1.29 1.58V17.5h2.01z" fill="currentColor" />
                    </svg>
                    <span className="text-sm text-white">LinkedIn</span>
                </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-300">
                Ao continuar, você aceita os <a className="text-red-500 hover:underline" href="#">Termos</a>.
            </div>
        </div>
    );
}