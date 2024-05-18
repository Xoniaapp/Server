import { config } from 'dotenv';
import crypto from 'crypto';
import os from 'os';

config();

const APP_CONSTANTS = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT || 8080,
    HOST: process.env.HOST || '0.0.0.0',
    EPOCH: 1706677310,
    MACHINE_ID:
        BigInt(
            `0x${crypto.createHash('sha256').update(os.hostname()).digest('hex')}`
        ) & 0xfffn,
    SEQUENCE_MASK: 0xfffn,
};

export { APP_CONSTANTS };
