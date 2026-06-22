---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612005
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #10 - Modification of the ALOP data source

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

This requirement extends the ALOP data source with next needed attributes for print:

	
- disbursement bank account data (getting via PaymentChannel REST)
	
- tariff items related to the account (getting via account/tariff REST API)


PaymentChannel response structure: https://git.homecredit.net/product/hss-integration/-/blob/develop/hss-services/hss-payment/hss-payment-oxm/src/main/resources/net/homecredit/hss/integration/paymentchannel/xsd/rest_v1/PaymentChannelRestV1.xsd

Changes tagged in the SD as: CSI-344

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
