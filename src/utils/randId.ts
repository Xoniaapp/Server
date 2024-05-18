import { APP_CONSTANTS } from '@/config/app.config';
import crypto from 'crypto';

function randId(prefix: string, length: number): string {
    return `${prefix}_${crypto
        .randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length)}`;
}

let sequence: bigint = 0n;
let lastTimestamp: bigint = -1n;

function generateTimestamp(): bigint {
    return BigInt(Date.now()) - BigInt(APP_CONSTANTS.EPOCH);
}

function generateRandomSequence(): bigint {
    return (
        BigInt(crypto.randomBytes(2).readUInt16LE(0)) &
        APP_CONSTANTS.SEQUENCE_MASK
    );
}

function generateSnowflake(): string {
    let timestamp = generateTimestamp();

    if (timestamp === lastTimestamp) {
        sequence = (0n + 1n) & APP_CONSTANTS.SEQUENCE_MASK;
        if (sequence === 0n) {
            timestamp = generateTimestamp();
        }
    } else {
        sequence = generateRandomSequence();
    }

    const snowflake =
        (timestamp << 22n) |
        (APP_CONSTANTS.MACHINE_ID << 12n) |
        (sequence & APP_CONSTANTS.SEQUENCE_MASK);

    const snowflakeString = snowflake.toString().padStart(18, '0');

    lastTimestamp = timestamp;

    return snowflakeString;
}

export { randId, generateSnowflake };
