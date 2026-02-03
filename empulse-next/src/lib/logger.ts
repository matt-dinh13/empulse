export type LogLevel = 'info' | 'warn' | 'error' | 'debug'

interface LogEntry {
    level: LogLevel
    message: string
    timestamp: string
    context?: Record<string, unknown>
    error?: string
    stack?: string
}

class Logger {
    private log(level: LogLevel, message: string, context?: Record<string, unknown>, error?: Error) {
        const entry: LogEntry = {
            level,
            message,
            timestamp: new Date().toISOString(),
            context,
        }

        if (error) {
            entry.error = error.message
            entry.stack = error.stack
        }

        console.log(JSON.stringify(entry))
    }

    info(message: string, context?: Record<string, unknown>) {
        this.log('info', message, context)
    }

    warn(message: string, context?: Record<string, unknown>) {
        this.log('warn', message, context)
    }

    error(message: string, error?: unknown, context?: Record<string, unknown>) {
        const err = error instanceof Error ? error : new Error(String(error))
        this.log('error', message, context, err)
    }

    debug(message: string, context?: Record<string, unknown>) {
        if (process.env.NODE_ENV !== 'production') {
            this.log('debug', message, context)
        }
    }
}

export const logger = new Logger()
