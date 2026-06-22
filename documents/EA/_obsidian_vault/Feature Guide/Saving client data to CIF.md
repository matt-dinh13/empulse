---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433082
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Saving client data to CIF

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

Configurable moments of saving client data to CIF

## Input
- client's data

## Output
- CUID

## Detail
The system supports a possibility to request storing unofficial client's contact data to CIF, which is configurable on the system level.

- In case this option is configured, the  client's contact data gathered on the AF (in case 1 step process) or on the 1Bod (in case 2 step process) are saved into CIF as soon as the client is successfully identified.

Note: before contract is signed, client's contact data are considered as unofficial

The system supports two possible moments of storing all client's data collected on the AF to CIF, which are configurable on the system level.

- In case configured moment on contract signature, the client data are sent to CIF as soon as the contract is successfully signed.
- In case configured moment on contract registration, the client data are sent to CIF as soon as the contract is successfully registered.

## 📊 Appears In (1 diagrams)

- Package: LOR
