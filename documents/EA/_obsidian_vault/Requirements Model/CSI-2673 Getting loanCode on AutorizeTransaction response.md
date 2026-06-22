---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21486 (CSI-2666) Expose loan code for Authorized Transactions in API"
domain: "Requirements Model"
element_id: 1764311
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2673 Getting loanCode on AutorizeTransaction response

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-21486 (CSI-2666) Expose loan code for Authorized Transactions in API

## 📝 Notes

Goal of this requirement:

	
- extension of BSL_Account_Transaction table for storing loanCode value (string, optional)
	
- storage the loanCode within transaction authorization - see UC13.118 Authorize transactions in Transaction Supplement
the loanCode is obtained from AuthorizeTransactionWithIPOfferResponse (the current SOAP method). For more info see - https://git.homecredit.net/product/hss-integration/-/blob/master/hss-services/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v6/AccountTransactionWS.xsd

## 📊 Appears In (1 diagrams)

- Custom: CBL-21486 (CSI-2666) Expose loan code for Authorized Transactions in API
