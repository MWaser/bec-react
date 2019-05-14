import axios from 'axios';

export function fetchTxs(filter = null) {
    return axios.get('/api/admin/txs2recv').then(({data}) => {
        if (filter) {
            data = data.filter(d => filter(d));
        }

        data.forEach((tx) => {
            if(tx.Details) {
                try {
                    tx.Details = JSON.parse(tx.Details)
                } catch (e) {
                    tx.Details = {}
                }
            }
            if(tx.KYC) {
                try {
                    tx.KYC = JSON.parse(tx.KYC)
                } catch (e) {
                    tx.KYC = {}
                }
            }
        });

        return data;
    });
}

export function linkTxs(txId, twId, admin) {
    return axios.post('/api/admin/txtwlink', {txId, twId, admin});
}
