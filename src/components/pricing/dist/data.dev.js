"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paymentIcons = exports.services = void 0;
var services = {
  generic: {
    icon: 'pricing-img1.svg',
    firstTitle: 'GENERIC',
    secondTitle: 'CHECK SERVICES',
    serviceList: [{
      title: 'Samsung IMEI Check',
      price: 0,
      infos: [{
        label: 'Model Info',
        description: 'MOBILE SM-G975F/DS BLACK VOD'
      }, {
        label: 'IMEI Number',
        description: '35881510XXXXXXX'
      }, {
        label: 'Master Number',
        description: '35881510XXXXXXX'
      }, {
        label: 'Serial Number',
        description: 'R58MA1XXXXX'
      }, {
        label: 'Model Desc',
        description: 'Galaxy S10+'
      }, {
        label: 'Model Number',
        description: 'SM-G975FZKDVOD'
      }, {
        label: 'Model Name',
        description: 'SM-G975F/DS'
      }, {
        label: 'Warranty Status',
        description: 'In Warranty'
      }, {
        label: 'Estimated Warranty End Date',
        description: '31-12-202'
      }, {
        label: 'Production location',
        description: 'Korea SEC'
      }, {
        label: 'Production Date',
        description: '07-10-2019'
      }, {
        label: 'Estimated Purchase Date',
        description: '31-12-2019'
      }, {
        label: 'Country',
        description: 'United Kingdom'
      }, {
        label: 'Carrier',
        description: 'Vodafone LTD'
      }]
    }, {
      title: 'Huawei IMEI Check  ',
      price: 0,
      infos: [{
        label: 'Description Full',
        description: 'HUAWEI P30 lite 4GB+128GB Midnight Black Single Card Vodafone Ver. UK&Ireland-VDF-Sim lock'
      }, {
        label: 'Model Code',
        description: 'Marie-L01A'
      }, {
        label: 'IMEI',
        description: '864056042XXXXXX'
      }, {
        label: 'S/N',
        description: 'JRQ4C19B080XXXXX'
      }, {
        label: 'Item Code',
        description: '51093XXX'
      }, {
        label: 'Customer Code',
        description: 'CIS10XXXX'
      }, {
        label: 'Offer Code',
        description: 'OFFE00085XXX'
      }, {
        label: 'Company',
        description: 'Vodafone Procurement Company S.a r.l.'
      }, {
        label: 'Country Code',
        description: 'GB'
      }, {
        label: 'Country Name',
        description: 'The United Kingdom of Great Britain and Northern Ireland'
      }, {
        label: 'Warranty Status',
        description: 'In Warranty'
      }, {
        label: 'Warranty Start',
        description: '2020/2/6'
      }, {
        label: 'Warranty Expire',
        description: '2022/2/7'
      }, {
        label: 'Warranty Details',
        description: ''
      }, {
        label: 'Warranty Type',
        description: '30 Day Device Return'
      }, {
        label: 'Valid in Country',
        description: 'GB'
      }, {
        label: 'Service Code',
        description: 'BS010000XX'
      }, {
        label: 'Start Date',
        description: '2020/2/6'
      }, {
        label: 'End Date',
        description: '2020/3/7'
      }, {
        label: 'Bind Date',
        description: '2020/1/15'
      }, {
        label: 'Order Date',
        description: '2019/11/8'
      }, {
        label: 'Shipment Date',
        description: '2019/12/11'
      }, {
        label: 'Delivery Date',
        description: '2019/12/18'
      }, {
        label: 'Warranty Type',
        description: '30 Day Device Replacement'
      }, {
        label: 'Valid in Country',
        description: 'GB'
      }, {
        label: 'Service Code',
        description: 'BS020000XX'
      }, {
        label: 'Start Date',
        description: '2020/2/6'
      }, {
        label: 'End Date',
        description: '2020/3/7'
      }, {
        label: 'Warranty Type',
        description: '2 Year Warranty'
      }, {
        label: 'Valid in Country',
        description: 'AT,BE,BG,CH,CY,CZ,DE,DK,EE,ES,FI,FR,GB,GR, HR,HU,IE,IS,IT,LT,LU,LV,MT,NL,NO,PL,PT,RO, SE,SI,SK'
      }, {
        label: 'Service Code',
        description: 'BS030000XX'
      }, {
        label: 'Start Date',
        description: '2022/2/7'
      }, {
        label: 'End Date',
        description: '2022/2/7'
      }]
    }, {
      title: 'Blacklist PRO (GSMA)(all brands)',
      price: 0,
      infos: [{
        label: 'IMEI',
        description: '356846100XXXXXX'
      }, {
        label: 'Model',
        description: 'Galaxy Foldable 5G'
      }, {
        label: 'Model Name',
        description: 'SM-F907B'
      }, {
        label: 'Manufacturer',
        description: 'Samsung Korea'
      }, {
        label: 'Blacklist Status',
        description: 'Blacklisted'
      }, {
        label: 'Blacklisted by',
        description: 'T-Mobile (UK) Limited'
      }, {
        label: 'Blacklist on',
        description: '2020-04-16 12:47:26'
      }, {
        label: 'Blacklisted Country',
        description: 'United Kingdom'
      }]
    }, {
      title: 'Blacklist Check (GSMA)(all brands)',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'Apple iPhone 12 Pro Max (A2342)'
      }, {
        label: 'Model Name',
        description: 'iPhone 12 Pro Max (A2342)'
      }, {
        label: 'Manufacturer',
        description: 'Apple Inc'
      }, {
        label: 'IMEI Number',
        description: '355060586XXXXX'
      }, {
        label: 'Blacklist Status',
        description: 'Blacklisted'
      }]
    }, {
      title: 'LG IMEI Check',
      price: 0,
      infos: [{
        label: 'Model Number',
        description: 'LGH815'
      }, {
        label: 'IMEI',
        description: '35987206685xxx'
      }, {
        label: 'ESN',
        description: '35987206685xxx'
      }, {
        label: 'MSN',
        description: '509KPMZ6xx627'
      }, {
        label: 'CSN',
        description: 'LG00007xxx286664'
      }, {
        label: 'Suffix',
        description: 'AVDFVK'
      }, {
        label: 'Location Code',
        description: 'N'
      }, {
        label: 'Chip Type',
        description: 'EG'
      }, {
        label: 'Production date',
        description: '17-09-2015'
      }, {
        label: 'Release date',
        description: '18-09-2015'
      }, {
        label: 'Buyer Name',
        description: 'VODAFONE'
      }, {
        label: 'Carrier Code',
        description: 'VDF'
      }, {
        label: 'Network',
        description: 'Vodafone'
      }, {
        label: 'Country',
        description: 'United Kingdom'
      }]
    }, {
      title: 'OnePlus IMEI Check',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'OnePlus 6T Midnight Black 8GB+128GB CN A6010'
      }, {
        label: 'IMEI',
        description: '86938604535XXXX'
      }, {
        label: 'SKU Number',
        description: '5011100496'
      }, {
        label: 'Warranty Status',
        description: 'Warranty Expired'
      }, {
        label: 'Warranty Start',
        description: '12/04/2018 11:47:47'
      }, {
        label: 'Warranty End',
        description: '12/04/2019 11:47:47'
      }, {
        label: 'Production Date',
        description: '11/14/2018 16:41:00'
      }, {
        label: 'Activation Date',
        description: '12/04/2018 11:47:47'
      }, {
        label: 'Warranty was valid',
        description: '365 days'
      }, {
        label: 'Purchase Country',
        description: 'CN'
      }]
    }, {
      title: 'XIAOMI MI LOCK & INFO (S2)',
      price: 0,
      infos: [{
        label: 'Description',
        description: 'Redmi Note 8T Moonlight White 4GB RAM 64GB ROM'
      }, {
        label: 'IMEI',
        description: '869351040XXXXX'
      }, {
        label: 'Brand',
        description: 'Xiaomi'
      }, {
        label: 'Model',
        description: 'M1908C3XG'
      }, {
        label: 'Name',
        description: 'Redmi Note 8T'
      }, {
        label: 'Purchase Country',
        description: 'Russia'
      }, {
        label: 'Warranty Status',
        description: 'Out Of Warranty'
      }, {
        label: 'Warranty Start Date',
        description: '2020-02-29 16:00:00'
      }, {
        label: 'Warranty End Date',
        description: '2021-02-28 16:00:00'
      }, {
        label: 'Production Date',
        description: '2020-01-13 17:12:32'
      }, {
        label: 'Activation Date',
        description: '2020-02-29 18:52:03'
      }, {
        label: 'MI Activation Lock',
        description: 'ON'
      }]
    }, {
      title: 'HTC IMEI Check',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'HTC U 11'
      }, {
        label: 'Part #',
        description: '99HAMP0XX-00'
      }, {
        label: 'Serial #',
        description: 'FA8491800xxx'
      }, {
        label: 'IMEI',
        description: '35612408091XXXX'
      }, {
        label: 'Series',
        description: 'OCEAN#UHL-C9'
      }, {
        label: 'Part Desc',
        description: 'SKU HTC English-WWE GENERIC WEND 4G/64G Bootloader Lock Brilliant Black DEF00 w/o SIM Lock OCEAN#UHL-C9#EMEA'
      }, {
        label: 'Customer Desc',
        description: 'VODAFONE PROCUREMENT COMPANY S.A.R.L'
      }, {
        label: 'Ship Country',
        description: 'ROMANIA'
      }, {
        label: 'DOA',
        description: 'F'
      }, {
        label: 'DOA Warranty Month',
        description: '12'
      }, {
        label: 'Warranty FG',
        description: 'Y'
      }, {
        label: 'Warranty Month',
        description: '25'
      }, {
        label: 'Warranty Date',
        description: '2018/04/20'
      }, {
        label: 'Warranty End Date',
        description: '2020/05/20'
      }]
    }, {
      title: 'Sony IMEI Check',
      price: 0,
      infos: [{
        label: 'Model Name',
        description: 'Xperia L1'
      }, {
        label: 'Model Number',
        description: 'G3311'
      }, {
        label: 'IMEI Number',
        description: '3552490932xxxxx'
      }, {
        label: 'Serial Number',
        description: 'WUJ01SXXXX'
      }, {
        label: 'Handset Color',
        description: 'Black'
      }, {
        label: 'Sales Id',
        description: '130X-1139'
      }, {
        label: 'Warranty Start Date',
        description: 'January 02 2019'
      }, {
        label: 'Warranty End Date',
        description: 'January 1 2021'
      }, {
        label: 'Manufacture Date',
        description: 'August 03 2018'
      }, {
        label: 'Activation Date',
        description: 'January 02 2019'
      }, {
        label: 'Activation Country',
        description: 'Ireland'
      }, {
        label: 'Sold-to Country',
        description: 'Ireland'
      }, {
        label: 'Sold-to Customer',
        description: '16002x'
      }, {
        label: 'Sold-to Company',
        description: 'Fonua Warehouse Location'
      }]
    }, {
      title: 'Motorola IMEI Check',
      price: 0,
      infos: [{
        label: 'Product Name',
        description: 'MOTO Phone XT2025-2 GB 2+32G BC SSL TSC'
      }, {
        label: 'IMEI',
        description: '359090100xxxxxx'
      }, {
        label: 'Serial',
        description: 'TN63LWXXXX'
      }, {
        label: 'Model',
        description: 'Moto XT2025-2'
      }, {
        label: 'Machine Type',
        description: 'PAGA'
      }, {
        label: 'Product Id',
        description: '/PAGA0024GB/TN63LW8XKB'
      }, {
        label: 'MTM',
        description: 'PAGA0024GB'
      }, {
        label: 'Transceiver',
        description: 'SA79A6P5VJ'
      }, {
        label: 'Ship Date',
        description: '2019-12-05'
      }, {
        label: 'Ship to City',
        description: 'Bolton'
      }, {
        label: 'Sold to Country',
        description: 'United Kingdom'
      }, {
        label: 'Warranty Remaining',
        description: '694 days'
      }, {
        label: 'Warranty End',
        description: '2022-04-14'
      }, {
        label: 'Warranty Information',
        description: 'Ship'
      }, {
        label: 'Phone',
        description: 'In Warranty 2020-04-15 to 2022-04-14'
      }, {
        label: 'Charger/USB Cable',
        description: 'In Warranty 2020-04-15 to 2021-04-14'
      }, {
        label: 'Battery',
        description: 'In Warranty 2020-04-15 to 2021-04-14'
      }, {
        label: 'Earphone',
        description: 'In Warranty 2020-04-15 to 2021-04-14'
      }]
    }, {
      title: 'ZTE Imei Check',
      price: 0,
      infos: [{
        label: 'Model Code',
        description: 'VFD 600'
      }, {
        label: 'IMEI',
        description: '3555950719xxxxx'
      }, {
        label: 'MSN',
        description: '3222649xxxxx'
      }, {
        label: 'Board Tracking No',
        description: '701409201xxx'
      }, {
        label: 'Product Code',
        description: '126677801xxx'
      }, {
        label: 'Product Line',
        description: 'Customization'
      }, {
        label: 'Product Name',
        description: 'P809V50'
      }, {
        label: 'Product Description',
        description: 'VFD 600 Mobile Phone'
      }, {
        label: 'Product Info',
        description: 'RO/White/YMX/Vodafone/LTE/5M+8M'
      }, {
        label: 'Production Date',
        description: '2016-05-20 20:22:27'
      }, {
        label: 'Warranty Status',
        description: 'Out of Warranty'
      }]
    }, {
      title: 'Brand + Model IMEI Check',
      price: 0.01,
      infos: [{
        label: 'IMEI',
        description: '354460116xxxxxx'
      }, {
        label: 'Model',
        description: 'Galaxy S20'
      }, {
        label: 'Model Name',
        description: 'SM-G980F/DS'
      }, {
        label: 'Manufacturer',
        description: 'Samsung Korea'
      }]
    }]
  },
  apple: {
    icon: 'pricing-img2.svg',
    firstTitle: 'APPLE',
    secondTitle: 'CHECK SERVICES',
    serviceList: [{
      title: 'APPLE FULL INFO (+CARRIER)-NEW',
      price: 0,
      infos: [{
        label: 'Model Description',
        description: 'SVC IPHONE 12PROMAX NAMM 128GB BLU CI/AR'
      }, {
        label: 'Model',
        description: 'iPhone 12 Pro Max 128GB Pacific Blue [A2342] [iPhone13,4]'
      }, {
        label: 'IMEI',
        description: '3531676676XXXXX'
      }, {
        label: 'IMEI2',
        description: '3531676674XXXXX'
      }, {
        label: 'Serial Number',
        description: 'G0NG1MMXXXXX'
      }, {
        label: 'Estimated Purchase Date',
        description: '2021-06-05'
      }, {
        label: 'Activation Status',
        description: 'Activated'
      }, {
        label: 'Warranty Status',
        description: 'AppleCare+'
      }, {
        label: 'Coverage Start Date',
        description: '07-03-2021'
      }, {
        label: 'Estimated Purchase Date',
        description: '07-03-2021'
      }, {
        label: 'Telephone Technical Support',
        description: 'Active'
      }, {
        label: 'Telephone Technical Support Expiration Date',
        description: '05-06-2021'
      }, {
        label: 'Telephone Technical Support Expires in',
        description: '122 days'
      }, {
        label: 'Repairs and Service Coverage',
        description: 'Expired'
      }, {
        label: 'Repairs and Service Expiration Date',
        description: '07-03-2022'
      }, {
        label: 'AppleCare Eligible',
        description: 'No'
      }, {
        label: 'Valid Purchase Date',
        description: 'Yes'
      }, {
        label: 'Registered Device',
        description: 'Yes'
      }, {
        label: 'Replaced Device',
        description: 'No'
      }, {
        label: 'Loaner Device',
        description: 'No'
      }, {
        label: 'Purchase Country',
        description: 'United States'
      }, {
        label: 'Demo Unit',
        description: 'No'
      }, {
        label: 'Find My iPhone',
        description: 'ON'
      }, {
        label: 'iCloud Status',
        description: 'Lost Mode'
      }, {
        label: 'Blacklist Status',
        description: 'Blacklisted'
      }, {
        label: 'Carrier',
        description: 'US T-Mobile(Sprint/MVNO) Locked Activation Policy'
      }, {
        label: 'Next Tether Policy',
        description: '2136'
      }, {
        label: 'Country',
        description: 'United States'
      }, {
        label: 'Sim-Lock',
        description: 'Locked'
      }]
    }, {
      title: 'Find my iPhone (On/Off) + Model',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'Apple iPhone 11 Pro Max (A2218)'
      }, {
        label: 'IMEI',
        description: '353907105XXXXX'
      }, {
        label: 'Find My iPhone',
        description: 'ON'
      }]
    }, {
      title: 'iCloud Status (Clean/Lost)+ Model',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'Apple iPhone 7 Plus (A1784)'
      }, {
        label: 'IMEI',
        description: '3538100XXXXXXXX'
      }, {
        label: 'Find My iPhone',
        description: 'ON'
      }, {
        label: 'iCloud Status',
        description: 'Lost Mode'
      }]
    }, {
      title: 'Apple SimLock + Model',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'IPHONE 13 MIDNIGHT 128GB-USA'
      }, {
        label: 'IMEI',
        description: '354455401XXXXX'
      }, {
        label: 'IMEI 2',
        description: '3544554013XXXXX'
      }, {
        label: 'Serial Number',
        description: 'LF7D12CXXX'
      }, {
        label: 'Estimated Purchase Date',
        description: '2022-01-27'
      }, {
        label: 'SIM Lock',
        description: 'Locked'
      }]
    }, {
      title: 'Apple Carrier + SimLock',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'iPhone 11 64GB Black Cellular [A2111] [iPhone12,1]'
      }, {
        label: 'Model Description',
        description: 'IPHONE 11 BLACK 64GB TMO-USA'
      }, {
        label: 'IMEI',
        description: '3539701056XXXXX'
      }, {
        label: 'IMEI 2',
        description: '3539701055XXXXX'
      }, {
        label: 'Serial Number',
        description: 'DNPZK1NZZXXZ'
      }, {
        label: 'Purchase Country',
        description: 'United States'
      }, {
        label: 'Estimated Purchase Date',
        description: '2019-11-08'
      }, {
        label: 'Demo Unit',
        description: 'No'
      }, {
        label: 'Carrier',
        description: 'US T-Mobile(Sprint/MVNO) Locked Activation Policy'
      }, {
        label: 'Next Tether Policy',
        description: '2136'
      }, {
        label: 'Country',
        description: 'United States'
      }, {
        label: 'Sim-Lock',
        description: 'Locked'
      }]
    }, {
      title: 'iPhone/iPad MDM Check',
      price: 0,
      infos: [{
        label: 'IMEI',
        description: '35301811230XXXX'
      }, {
        label: 'Model',
        description: 'iPhone 12 mini'
      }, {
        label: 'MDM',
        description: 'ON'
      }]
    }, {
      title: 'Warranty + Activation + Replaced',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'iPhone 13 Pro'
      }, {
        label: 'IMEI',
        description: '3512287654XXXXX'
      }, {
        label: 'Activation Status',
        description: 'Activated'
      }, {
        label: 'Warranty Status',
        description: 'Apple Limited Warranty'
      }, {
        label: 'Coverage Start Date',
        description: '05-01-2022'
      }, {
        label: 'Estimated Purchase Date',
        description: '05-01-2022'
      }, {
        label: 'Telephone Technical Support',
        description: 'Active'
      }, {
        label: 'Telephone Technical Support Expiration Date',
        description: '05-04-2022'
      }, {
        label: 'Telephone Technical Support Expires in',
        description: '68 days'
      }, {
        label: 'Repairs and Service Coverage',
        description: 'Active'
      }, {
        label: 'Repairs and Service Expiration Date',
        description: '05-01-2023'
      }, {
        label: 'Repairs and Service Expires in',
        description: '343 days'
      }, {
        label: 'AppleCare Eligible',
        description: 'No'
      }, {
        label: 'Valid Purchase Date',
        description: 'Yes'
      }, {
        label: 'Registered Device',
        description: 'Yes'
      }, {
        label: 'Replaced Device',
        description: 'No'
      }, {
        label: 'Loaner Device',
        description: 'No'
      }]
    }, {
      title: 'APPLE FULL INFO (No Carier/Simlock)',
      price: 0,
      infos: [{
        label: 'Model Description',
        description: 'IPHONE 13 PRO MAX SLV 512GB-GBR'
      }, {
        label: 'Model',
        description: 'iPhone 13 Pro Max'
      }, {
        label: 'IMEI Number',
        description: '3513394149XXXXX'
      }, {
        label: 'IMEI2 Number',
        description: '3513394145XXXXX'
      }, {
        label: 'MEID Number',
        description: '351339414XXXXX'
      }, {
        label: 'Serial Number',
        description: 'X52QHZZXXZ'
      }, {
        label: 'Activation Status',
        description: 'Not Activated'
      }, {
        label: 'Warranty Status',
        description: 'Apple Limited Warranty'
      }, {
        label: 'Estimated Purchase Date',
        description: '13 Jan 2022'
      }, {
        label: 'Purchase Country',
        description: 'United Kingdom'
      }, {
        label: 'Telephone Technical Support',
        description: 'N/A'
      }, {
        label: 'Repairs and Service Coverage',
        description: 'Active'
      }, {
        label: 'AppleCare Eligible',
        description: 'No'
      }, {
        label: 'Valid Purchase Date',
        description: 'No'
      }, {
        label: 'Registered Device',
        description: 'No'
      }, {
        label: 'Active Apple Repair',
        description: 'No'
      }, {
        label: 'Replaced by Apple',
        description: 'No'
      }, {
        label: 'Replacement Device',
        description: 'No'
      }, {
        label: 'Demo Unit',
        description: 'No'
      }, {
        label: 'Obsolete Device',
        description: 'No'
      }, {
        label: 'Find My iPhone',
        description: 'OFF'
      }, {
        label: 'Blacklist Status',
        description: 'Blacklisted'
      }, {
        label: 'Blacklist Records',
        description: '1'
      }, {
        label: 'Blacklisted by',
        description: 'O2 (UK) Limited'
      }, {
        label: 'Blacklisted on',
        description: '2022-01-24 11:26:05'
      }, {
        label: 'Blacklisted Country',
        description: 'United Kingdom'
      }]
    }, {
      title: 'IMEI TO SN',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'IPHONE 13 PRO MAX GPH 128GB-USA'
      }, {
        label: 'IMEI Number',
        description: '3553802523xxxxx'
      }, {
        label: 'IMEI2 Number',
        description: '355380252xxxxx'
      }, {
        label: 'Serial Number',
        description: 'R9TPX4QXFX'
      }, {
        label: 'Estimated Purchase Date',
        description: '2022-01-15'
      }]
    }, {
      title: 'iMac FMI Status On/Off',
      price: 0,
      infos: [{
        label: 'Model',
        description: 'MacBook Pro (13-inch, 2020, Two Thunderbolt 3 ports) / MBP 13.3 SILVER 1.4GHZ/8GB/256GB'
      }, {
        label: 'Serial Number',
        description: 'C02DDCFXXXX'
      }, {
        label: 'Find My Mac',
        description: 'ON'
      }]
    }, {
      title: 'SOLD BY [Apple]',
      price: 0,
      infos: [{
        label: 'Description',
        description: 'IPHONE 13 MIDNIGHT 256GB-GBR'
      }, {
        label: 'Model',
        description: 'IPHONE 13 ROW 256GB MIDNIGHT'
      }, {
        label: 'IMEI Number',
        description: '3505210635XXXX'
      }, {
        label: 'IMEI2 Number',
        description: '35052106399XXXX'
      }, {
        label: 'MEID Number',
        description: '350521063XXXX'
      }, {
        label: 'Serial Number',
        description: 'L773C5ZZXX'
      }, {
        label: 'Find My iPhone',
        description: 'OFF'
      }, {
        label: 'Replaced Device',
        description: 'NO'
      }, {
        label: 'Coverage Status',
        description: 'Apple Limited Warranty'
      }, {
        label: 'Product Sold By',
        description: 'AMAZON EU SARL'
      }, {
        label: 'Purchase Country',
        description: 'United Kingdom'
      }, {
        label: 'Estimated Purchase Date',
        description: '05 January 2022'
      }, {
        label: 'Coverage Start',
        description: '05 January 2022'
      }, {
        label: 'Coverage End',
        description: '04 January 2023'
      }, {
        label: 'Sim-Lock',
        description: 'Unlocked'
      }]
    }, {
      title: 'Apple Basic Info',
      price: 0,
      infos: [{
        label: 'Model Description',
        description: 'IPHONE 13 PRO SIERRA BLUE 128GB-RKZ'
      }, {
        label: 'Model',
        description: 'iPhone 13 Pro'
      }, {
        label: 'IMEI',
        description: '3539297927XXXX'
      }, {
        label: 'IMEI2',
        description: '35392979263XXXX'
      }, {
        label: 'MEID',
        description: '353929792XXXXX'
      }, {
        label: 'Serial',
        description: 'RXJ914XXXX'
      }, {
        label: 'iCloud Lock',
        description: 'ON'
      }, {
        label: 'iCloud Status',
        description: 'Clean'
      }, {
        label: 'Blacklist Status',
        description: 'Clean'
      }, {
        label: 'Warranty Status',
        description: 'Limited Warranty'
      }, {
        label: 'Estimated Purchase Date',
        description: '2022-01-22'
      }, {
        label: 'Replaced Device',
        description: 'No'
      }]
    }]
  },
  unlock: {
    icon: 'pricing-img3.svg',
    firstTitle: 'UNLOCK',
    secondTitle: 'IMEI SERVICES',
    firstWarningText: 'We do not provide unlock services!',
    secondWarningText: 'We do NOT decode icloud or track stolen phones!!!'
  }
};
exports.services = services;
var paymentIcons = [{
  icon: 'revolut.webp',
  width: '180px'
}, {
  icon: 'paypal.webp',
  width: '180px'
}, {
  icon: 'uk-bank.webp',
  width: '166px'
}, {
  icon: 'ireland-bank.webp',
  width: '237px'
}];
exports.paymentIcons = paymentIcons;