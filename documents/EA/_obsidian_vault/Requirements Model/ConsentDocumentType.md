---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1817828
diagrams: 3
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 ConsentDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Data for consent document are taken from particular entity given by the context (e.g. TempAppl_Person, Temporary_Application)

## 🔗 Connections (6)

- → Dependency «use»: [[AddressType (Class 1878263)]]
- → Dependency «use»: [[{MOD}DocumentFile]]
- → Dependency «use»: [[VerificationType]]
- → Dependency «use»: [[DocumentFileContent]]
- → Dependency «use»: [[PersonDataType]]
- ← Generalization: [[consentData]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Custom: LOR-9359 - Completely remove sign pad feature
- Logical: HO_CONSENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| person | PersonDataType |  |
| verification | VerificationType |  |
