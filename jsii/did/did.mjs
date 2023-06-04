import * as didJWT from 'did-jwt';

async function main() {
    const signer = didJWT.ES256Signer(didJWT.hexToBytes('d9fdb19f909aa66324179fb75e9ab516fc2e90601b083fce67105f8a7d8a00db'))
    const nonce = "efd843c0-139b-4368-a961-26a40686a41a";
    console.log("signer", signer)
    let jwt = await didJWT.createJWT(
        {
            aud: 'https://api-conformance.ebsi.eu/conformance/v3/issuer-mock',
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            iss: 'did:key:z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9Kbt1SmPicNSwaacwBQZLJPHEqbfR3RXHMS5agEhxYtNKvavuMQzSWizWAGMaRedXHxp9WrcPgLNGqD8HbfateqiVrifJUeJcH525UZi6jhRM1vYvJBA7CLj6VfuFv6Ze2mPS',
            nonce,
        },
        {
            issuer: 'did:key:z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9Kbt1SmPicNSwaacwBQZLJPHEqbfR3RXHMS5agEhxYtNKvavuMQzSWizWAGMaRedXHxp9WrcPgLNGqD8HbfateqiVrifJUeJcH525UZi6jhRM1vYvJBA7CLj6VfuFv6Ze2mPS',
            signer,
        },
        {
            kid: "did:key:z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9Kbt1SmPicNSwaacwBQZLJPHEqbfR3RXHMS5agEhxYtNKvavuMQzSWizWAGMaRedXHxp9WrcPgLNGqD8HbfateqiVrifJUeJcH525UZi6jhRM1vYvJBA7CLj6VfuFv6Ze2mPS#z2dmzD81cgPx8Vki7JbuuMmFYrWPgYoytykUZ3eyqht1j9Kbt1SmPicNSwaacwBQZLJPHEqbfR3RXHMS5agEhxYtNKvavuMQzSWizWAGMaRedXHxp9WrcPgLNGqD8HbfateqiVrifJUeJcH525UZi6jhRM1vYvJBA7CLj6VfuFv6Ze2mPS",
            typ: "openid4vci-proof+jwt",
            alg: 'ES256',
            jwk: {
                kty: 'EC',
                crv: 'P-256',
                x: 'xRjexHtaYcKd_XotSPAi4bRC3AQ_aBS1VmNPBfdkXds',
                y: '2VKM9JsfbWu4vLOJoeybiGZMBJp_JXBYJjpu0beT_6M'
            }
        }
    )
    console.log(jwt)
}
void main()