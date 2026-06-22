---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-19192 (CLM-5344) REST API createCommunication"
domain: "Modules"
element_id: 1852838
diagrams: 2
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}Create communication via API

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-19192 (CLM-5344) REST API createCommunication

## 📝 Notes

{ADD CLM-5344/}

Use case to allow for creation of client communication, including that which is NOT related to any contract or client. 

It's a POST method calling at e.g. https://clc.id00a1.cz.infra/rest/v1/communication/clc

## 🔗 Connections (5)

- → Realisation: [[{ADD}Create communication record]]
- → UseCase «include»: [[{ADD}07.040 Create communication record]]
- → Dependency: [[Create communication (Screen 1852678)]]
- → Dependency: [[createCommunication]]
- ← Association: [[External system (Actor 1879374)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-19192 (CLM-5344) REST API createCommunication
- Use Case: Communication records
