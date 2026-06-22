---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1878831
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get PaymentChannel data by paymentChannelId

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

This rule describes getting Payment Channel data by payment channel Id

Input:

	
- paymentChannelId


Output:

	
- PaymentChannel object



	
- System calls .../homerselect/openapi/paymentchannels/{paymentChannelId}
	
- If no data in the GetPaymentChannelResponse (result <>SUCCESS; resultCode = PAYMENT_CHANNEL_NOT_FOUND), system returns PAYMENT_CHANNEL_NO_DATA and ends
	
- If timeout occurs, system returns PAYMENT_CHANNEL_UNAVAILABLE and ends
	
- System returns PaymentChannel object

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Validate Transaction Supplement request]]
- ← Dependency: [[HO_ALOP_DATA filling rules]]
- ← Dependency: [[AlopRequestDocument]]
- ← Dependency: [[{MOD}13.110 Process account transaction for Transaction Supplement]]

## 📊 Appears In (4 diagrams)

- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
- Use Case: Transaction Supplement authorization/confirmation - Use case model
- Use Case: Transaction Supplement request creation - Use case model
