---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10212 Allow previously approved DDMs to be used as DDM for new Loans/LOR-10270 Application form: display list of available DDM"
domain: "Requirements Model"
element_id: 1878460
diagrams: 2
connections: 10
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Selecting source of DDM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10212 Allow previously approved DDMs to be used as DDM for new Loans/LOR-10270 Application form: display list of available DDM

## 📝 Notes

Following fields are affected if Source = NEW

	
- Account type - optional
	
- Account number - optional
	
- Account holder name - optional
	
- {ADD LOR-10270}Existing DDM - disabled{/ADD}


Following fields prefilled and disabled if {DEL LOR-10270} Source = EXISTING{/DEL} {ADD LOR-10270}any DDM is selected in Existing DDM fiels{/ADD}

	
- DDM type
	
- Regular payment
	
- Regular payment amount
	
- Account type
	
- Account number
	
- Account holder name
	
- Bank name
	
- Bank branch

## 🔗 Connections (8)

- → Dependency: [[DDM type (GUIElement 1820884)]]
- → Dependency: [[Regular payment amount (GUIElement 1820758)]]
- → Dependency: [[Regular payment amount (GUIElement 1820893)]]
- → Dependency: [[Regular payment (GUIElement 1820762)]]
- → Dependency: [[DDM type (GUIElement 1820765)]]
- → Dependency: [[Source (GUIElement 1820768)]]
- → Dependency: [[Source (GUIElement 1820892)]]
- → Dependency: [[Regular payment type (GUIElement 1820881)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10270 Application form: display list of available DDM
- Custom: LOR-9490 DDM source - existing ddm
