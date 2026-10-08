// Accept standard Next.js arguments and the supervised preview's Vite-style flags.
import { spawn } from 'node:child_process';
const passed = process.argv.slice(2).flatMap(arg => arg === '--strictPort' ? [] : [arg === '--host' ? '--hostname' : arg]);
const next = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', ...passed], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => next.kill(signal));
next.on('exit', code => process.exit(code ?? 1));
