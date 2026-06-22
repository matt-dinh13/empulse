---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1821440
diagrams: 3
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 SellerType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the data about some particular seller of the financial products.

LDM source:

	
- The subordinate sales-agent-related elements are filled in with data of the current user.
	
- The subordinate salesroom-related elements are filled in with data of the currently used salesroom, which means:
   - Salesroom, where the current user is logged to (when triggered manually from system's GUI).
   - Salesroom with code (Salesroom.Code) matching the salesroomCode from the request of the respective externally triggered operation.
If no such salesroom can be identified, then salesroom retrieved according to the rule Get salesroom by operation with Operation = 'APPLICATION_CREATED' on the input is used instead.

## 🔗 Connections (6)

- → Dependency «use»: [[AddressType (Class 1878263)]]
- → Dependency «use»: [[PersonFullNameType]]
- → Dependency: [[Get salesroom by operation]]
- → Dependency «use»: [[{MOD}NameType]]
- → Dependency «use»: [[AccountType]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Custom: LOR-9343 - Use ApplicationManagement REST instead of ApplicationManagementWS v23 in DSM
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| saPhone | string |  |
| posCode | string |  |
| posName | string |  |
| posURL | string |  |
| sellerMode | string |  |
| posPaymentMode | string |  |
| posAddress | AddressType |  |
| partnerCode | string |  |
| partnerName | string |  |
| paymentBankAccount | AccountType |  |
| salesman | PersonFullNameType |  |
| posPaperless | boolean |  |
