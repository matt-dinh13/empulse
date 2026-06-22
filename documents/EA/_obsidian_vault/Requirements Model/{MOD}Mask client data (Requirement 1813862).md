---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screenstwt"
domain: "Requirements Model"
element_id: 1813862
diagrams: 5
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Mask client data

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screenstwt

## 📝 Notes

If returnedCustomer has protection flag partyRole.anonymizeYn=TRUE, all attributes in the grid for that customer (except CUID and Client' full name) will be masked by '*' symbol

{ADD CLM-4255)Hiding/masking of attributes Date of birth, Gender and Parent name is controlled by access rights linked to the use case 06.040 Search Clients.{/ADD}

## 🔗 Connections (4)

- ← Dependency: [[List of clients - VN]]
- ← Dependency: [[List of clients - KZ]]
- ← Dependency: [[List of clients - Default]]
- ← Dependency: [[{MOD}06.040 Search Clients]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: List of clients - Default
- Custom: List of clients - KZ
- Custom: List of clients - VN
- Custom: Search clients
