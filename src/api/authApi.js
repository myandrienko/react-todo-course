import * as jose from 'jose';

const algorithm = 'ES256'
const pkcs8 = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
-----END PRIVATE KEY-----`
const ecPrivateKey = await jose.importPKCS8(pkcs8, algorithm)

export async function authenticate({ login }) {
  return await new jose.SignJWT({ 'name': login })
    .setProtectedHeader({ alg: 'ES256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(ecPrivateKey)
}
