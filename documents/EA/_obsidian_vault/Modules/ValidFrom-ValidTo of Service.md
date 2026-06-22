---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Validation Rules"
domain: "Modules"
element_id: 1855359
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 ValidFrom-ValidTo of Service

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Validation Rules

## 📝 Notes

Validations:

	
- Valid From is mandatory.
MSG_5040 (e. g. Mandatory field {0} is empty!)
	
- Valid From >= TODAY if does not exist active version of the service.
MSG_ServiceValidToTODAY  (e. g. Service validity must start at least from today.)
	
- Valid To >= Valid From or empty.
MSG_ServiceValidFromValidTo(e. g. End of service validity must be greater than start.)

## 🔗 Connections (3)

- ← Dependency: [[Valid from (GUIElement 1867439)]]
- ← Dependency: [[Valid to (GUIElement 1867427)]]
- ← Dependency: [[Service - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
