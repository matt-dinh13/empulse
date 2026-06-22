---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827562
diagrams: 8
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Get Service definition from New Service Catalogue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

This rule describes how to get a Service by its identifier from the new Service Catalogue

Input:

	
- serviceCode

Output:

	
- ServiceDefinition object || an error


Steps:

	
- System calls PRC GET .../openapi/v1/sc-services/{serviceCode}?deps=PARAMETERS
	
- System returns result into the output

## 🔗 Connections (4)

- ← Dependency: [[11.010 Create deal (VAS) (UseCase 1829623)]]
- ← Dependency: [[11.040 Activate Deal (VAS)]]
- ← Dependency: [[{ADD}11.050 Deactivate Deal (VAS)]]
- ← Dependency: [[{ADD}11.070 Prolong Deal Period (VAS) (UseCase 1829611)]]

## 📊 Appears In (8 diagrams)

- Custom: Business rules
- Custom: CSI-1806 Create Deal method modification
- Use Case: Activate Deal - Use Case Model
- Use Case: CSI-2918 VAS Deal activation method
- Use Case: CSI-2936 VAS Deal deactivation method
- Use Case: Deal management - Use Case Model
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
