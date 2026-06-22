---
type: Requirement
stereotype: "Business"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents"
domain: "Requirements Model"
element_id: 1508703
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 BIZ#1 Restrict document files download on document level

> **Type**: Requirement · **Stereotype**: «Business»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents

## 📝 Notes

Current state:
User can download all documents from selected tab or no document. Partial download from tab is not implemented.

Desired result:

	
- User can download only Delivery Advice document from Printout documents tab from contracts in status Signed or Active
	
- User can not download Application Form and Sanctional Letter from Contract documents tab and Printout documents tab. However user can download other documents.


Solution:
Partial download tab is going to be controlled by security level, which is defined for each document type.
E.g. User with the 01.128 Preview document printouts (file download) will be able to download Delivery Advice document (security level = 1), but will not be able to download other documents (security level > 0).

## 📊 Appears In (1 diagrams)

- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
