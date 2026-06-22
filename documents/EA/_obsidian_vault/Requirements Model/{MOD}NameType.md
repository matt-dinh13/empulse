---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1878223
diagrams: 12
connections: 9
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}NameType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Object containing the data of some particular person's name.

## 🔗 Connections (9)

- ← Dependency «use»: [[PaidContractType]]
- ← Dependency «use»: [[PackageItemType]]
- ← Dependency: [[{MOD}PaidContractType]]
- ← Dependency «use»: [[PaidContractChannel_PBA]]
- ← Dependency: [[ContractInstallmentType]]
- ← Dependency «use»: [[PersonDataType]]
- ← Dependency «use»: [[SellerType]]
- ← Dependency «use»: [[{MOD}PersonalDetailsType]]
- → Generalization «XSDextension»: [[NameBaseType]]

## 📊 Appears In (12 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: External Reference
- Logical: HO_CONSENT_DATA
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_CONTRACT_PACKAGE
- Logical: HO_GENERAL_TYPES
- Logical: HO_INSTALLMENT_DATA
- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout
- Logical: HO_PAYMENT_ORDER_FILE data source for printout
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| suffix | string |  |
| nickName | string |  |
| mothersName | string |  |
