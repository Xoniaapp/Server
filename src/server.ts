import { APP_CONSTANTS } from '@/config/app.config';
import buildServer from './build';

const server = buildServer();

const start = (port: number, host: string): void => {
    try {
        server.log.info(
            `Server is starting in ${APP_CONSTANTS.ENVIRONMENT} mode`
        );

        server
            .listen({ port, host })
            .then(() => server.log.info('Server is ready to serve requests'));
    } catch (error) {
        server.log.error(error);
        process.exit(1);
    }
};

const shutdown = async () => {
    server.log.info('Starting graceful shutdown');

    await server.close();

    server.log.info('Server is shut down');
    process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default start;
