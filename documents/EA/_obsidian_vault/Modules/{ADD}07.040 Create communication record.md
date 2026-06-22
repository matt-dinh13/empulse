---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights"
domain: "Modules"
element_id: 1852841
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}07.040 Create communication record

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/Access Rights

## 📝 Notes

{ADD CLM-5409/}

This technical UC serves as a container for common functionality needed by other Create comm UC's, originally carried out by them separately.

## 🔗 Connections (5)

- → Dependency: [[Relationships between form fields (Boundary 1852866)]]
- ← UseCase «include»: [[07.040 Create communication record manually (UseCase 1852856)]]
- → Realisation: [[{ADD}Create communication record]]
- → Dependency: [[createCommunication]]
- ← UseCase «include»: [[{ADD}Create communication via API]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-19192 (CLM-5409) Implement Create communication screen
- Logical: createCommunication
- Use Case: Communication records
