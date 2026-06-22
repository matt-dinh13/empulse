---
type: GUIElement
stereotype: "combo"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/Insurance Types/User Interface"
domain: "Modules"
element_id: 1852728
diagrams: 1
connections: 3
tags:
  - guielement
  - modules
---

# 🖥️ Insurance program

> **Type**: GUIElement · **Stereotype**: «combo»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/Insurance Types/User Interface

## 📝 Notes

Listed: System gets insurance program codes from external module (INSR) by rest service call GET request: /rest/v1.0/insurance-programs with following parameters:
- versionStatus = A
- subjectType =
	- CUSTOMER for ServiceType.ServiceScope = CONTRACT 
	- GOODS for ServiceType.ServiceScope = COMMODITY 

Prefilled with Service.InsuranceService.InsuranceProgramCode

Localization Code: SER_InsProgram

## 🔗 Connections (3)

- → Dependency: [[Insurance Program]]
- → Dependency: [[Mandatory (Requirement 1789779)]]
- → Dependency: [[Only values from code list]]

## 📊 Appears In (1 diagrams)

- Custom: Set Insurance Service properties
