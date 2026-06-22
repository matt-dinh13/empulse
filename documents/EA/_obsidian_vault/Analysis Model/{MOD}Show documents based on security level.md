---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules"
domain: "Analysis Model"
element_id: 1755902
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Show documents based on security level

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules

## 📝 Notes

User can see a document only if the user has an access right sufficient for the security level of the document:

If the parameter (parameters.properties) controlIndividualDocumentSecurityLevel = FALSE or Document->Document_Attribute[.Code='SECURITY_LEVEL'] does not exist, then:

	
- Without any security-level-based privilege, user can see only the documents with Document_Type.Security_Level = 0 (including the documents with undefined security level).
	
- With the 01.210 Show contract detail (document wit security level 1) privilege, user can see all documents with Document_Type.Security_Level <= 1.
	
- {ADD CLM-2719}
With the 01.210 Show contract detail (document with security level 2) privilege, user can see all documents with Document_Type.Security_Level <= 2.
{/ADD}


If the parameter (parameters.properties) controlIndividualDocumentSecurityLevel = TRUE and Document->Document_Attribute[.Code='SECURITY_LEVEL'] exists, then:

	
- Without any security-level-based privilege, user can see only the documents with Document->Document_Attribute[.Code='SECURITY_LEVEL'].Value = 0 (including the documents with undefined security level).
	
- With the 01.210 Show contract detail (document wit security level 1) privilege, user can see all documents with Document->Document_Attribute[.Code='SECURITY_LEVEL'].Value <= 1.
	
- With the 01.210 Show contract detail (document with security level 2) privilege, user can see all documents with Document->Document_Attribute[.Code='SECURITY_LEVEL'].Value <= 2.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
