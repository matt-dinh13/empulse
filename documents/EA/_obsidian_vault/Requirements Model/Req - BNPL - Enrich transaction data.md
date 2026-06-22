---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data"
domain: "Requirements Model"
element_id: 1839498
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Req - BNPL - Enrich transaction data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-26143 (CSI-3705) BNPL - Enrich transaction data

## 📝 Notes

REQ: 
To enrich database and showing in UI/ PDF statement from STM service for some transaction data as below:

	
- Seller info: sellers code/name (concatenated as one text value for each seller)
- will be stored by country in ADS as party, stored in BSL supplement custom data and provided to AM as attributes
	
- VietQR beneficiary info: beneficiary account number, beneficiary bank, beneficiary account name 
- already covered by paymentChannelId which is loaded from ADS, stored in supplement and provided to AM as attributes
	
- Promotion info: PMC discount amount, PMC voucher code, DownPayment (cashPayment)
- will be stored by country in SQS, stored in BSL supplement custom data and provided to AM as attributes
	
- Basket info: Commodity Type, Item name, model, Manufacturer, Down payment, Number of item in basket, goods amount
- already covered by commodityId which is stored in supplement custom data, it will be provided to AM as commodity


Updated UC:
Store additional data from SQS and ADS during creation of transaction supplement: 
{MOD}13.100 Create Transaction Supplement service + rule {MOD}Set Transaction Supplement values 
Provide additional data to AM in ConfirmTransactionRequest:
13.110 Process account transaction for Transaction Supplement + rule {MOD}Create Confirm Transaction Request for AM

## 📊 Appears In (1 diagrams)

- Custom: CBL-26143 (CSI-3705) BNPL - Enrich transaction data
