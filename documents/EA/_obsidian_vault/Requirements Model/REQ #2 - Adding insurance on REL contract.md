---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4480 (CLM-1770) Web Service to Add Insurance in Mobile Application"
domain: "Requirements Model"
element_id: 1367345
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Adding insurance on REL contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4480 (CLM-1770) Web Service to Add Insurance in Mobile Application

## 📝 Notes

Goal of this requirement is exposing an interface to add an insurance to a REL contract (i.e. creation of a new contract insurance service)
User sends data of chosen insurance (see REQ #1) to the interface
If a document is defined for the insurance, object of the defined document type is created
The interface returns basic data of the originated insurance and list of documents which are required for the insurance (i.e. documentId, documentTypeCode)

## 📊 Appears In (1 diagrams)

- Custom: CBL-4480 (CLM-1770) Web Service to Add Insurance in Mobile Application
