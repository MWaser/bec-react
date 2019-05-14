import moment from 'moment';

export const paymentColumns = [{
    Header: 'TwId',
    accessor: 'TwId',
    width: 70,
    className: 'text-center',
}, {
    Header: 'RefNum2',
    accessor: 'RefNum2',
}, {
    Header: 'Currency',
    accessor: 'Currency',
    width: 80,
    className: 'text-center',
}, {
    Header: 'Amount',
    accessor: 'Amount',
    className: 'text-center',
}, {
    Header: 'TWRefNo',
    accessor: 'TWRefNo',
}, {
    Header: 'Date',
    id: 'Date',
    accessor: row => row.Date ? moment.utc(row.Date).local().format('Y-MM-DD HH:mm:ss') : '',
}];

export const purchaseColumns = [{
    Header: 'TxId',
    accessor: 'TxId',
    width: 70,
    className: 'text-center',
}, {
    Header: 'Name',
    accessor: 'KYC.name',
}, {
    Header: 'Email',
    accessor: 'EMail',
}, {
    Header: 'Cost',
    accessor: 'Cost',
    className: 'text-center',
}, {
    Header: 'Purchased',
    id: 'Purchased',
    accessor: row => row.Purchased ? moment.utc(row.Purchased).local().format('Y-MM-DD HH:mm:ss') : '',
}, {
    Header: 'RefNum',
    accessor: 'RefNum',
}];
