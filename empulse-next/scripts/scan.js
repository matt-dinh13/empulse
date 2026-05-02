const { PrismaClient } = require('@prisma/client');
const regions = ['ap-southeast-1', 'us-east-1', 'us-west-1', 'eu-central-1', 'eu-west-1', 'ap-northeast-1', 'ap-southeast-2'];

(async () => {
    for (const r of regions) {
        const p = new PrismaClient({
            datasources: {
                db: {
                    url: `postgresql://postgres.unxqqidmcjfcvmbzlnav:Dogcavegaming0905665423%40@aws-0-${r}.pooler.supabase.com:5432/postgres`
                }
            }
        });
        try {
            console.log(`Testing ${r}...`);
            await p.user.count();
            console.log('SUCCESS REGION:', r);
            break;
        } catch(e) {
            console.log('FAIL', r, e.message.substring(0, 80));
        } finally {
            await p.$disconnect();
        }
    }
})();
