---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements"
domain: "Requirements Model"
element_id: 1817827
diagrams: 2
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 PersonDataType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL/LOR-9328 - Remove unused HO_CONSENT_DATA elements

## 📝 Notes

Entity keeping personal information of a respective person.

LDM source:

	
- Temporary_Application.* (for the customer)
	
- Temporary_Application->TempAppl_Person.* (ror related person)

## 🔗 Connections (7)

- → Dependency «use»: [[PersonNameWithSuffixType]]
- → Dependency «use»: [[{MOD}NameType]]
- ← Dependency «use»: [[ConsentDocumentType]]
- → Dependency «use»: [[DocumentsType (Class 1878261)]]
- → Dependency «use»: [[ContactsType (Class 1878240)]]
- → Dependency «use»: [[FullLanguageType]]
- → Dependency «use»: [[DocumentsDataType]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONSENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| personName | PersonNameWithSuffixType |  |
| dateOfBirth | date |  |
| documents | DocumentsDataType |  |
