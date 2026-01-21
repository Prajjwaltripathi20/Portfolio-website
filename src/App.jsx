import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                    Personal Portfolio
                </h1>
                <p className="text-xl text-gray-400">
                    Rebuilding...
                </p>
            </header>

            <main className="max-w-2xl text-center space-y-6">
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                    <h2 className="text-2xl font-semibold mb-2">Project Recovery Mode</h2>
                    <p className="text-gray-300">
                        The source code has been restored with a fresh base. You can now start building your awesome portfolio again.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
