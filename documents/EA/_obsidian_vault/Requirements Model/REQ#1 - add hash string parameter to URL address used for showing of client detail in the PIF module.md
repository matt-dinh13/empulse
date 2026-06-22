---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9343 (CLM-3079) Add controls in client data access in PIF via URL"
domain: "Requirements Model"
element_id: 1688657
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - add hash string parameter to URL address used for showing of client detail in the PIF module

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9343 (CLM-3079) Add controls in client data access in PIF via URL

## 📝 Notes

CLM uses direct link to PIF from Client detail with CUID value.
PH asks to solve this problem for security reasons so that users cannot easily enter a cuid (even randomly estimated) into URL field of the browser.

Hash string will be added to current URL including CUID value so the functionality can be skipped on PIF side if needed.

## 📊 Appears In (1 diagrams)

- Custom: CBL-9343 (CLM-3079) Add controls in client data access in PIF via URL
