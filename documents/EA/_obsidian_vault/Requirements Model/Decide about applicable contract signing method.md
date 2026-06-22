---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature"
domain: "Requirements Model"
element_id: 1879425
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 Decide about applicable contract signing method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature

## 📝 Notes

This object describes the steps, how system decides about the applicable contract signing method.

Input:

	
- ApplicationCode - unique identifier of the application, whose contract documentation should be signed using the respective signing method


Output:

	
- SigningMethod - applicable contract signing method (WET_SIGNATURE / OTP)


Steps:

	
- System checks if it is processed on paperless salesroom In case the user is actually not logged to any salesroom, then system takes the ApplicationCode from the input and evaluates this condition against the salesroom, where the corresponding application was created (i.e. Contract[.Code=ApplicationCode]->Temporary_Application.Salesroom_Code) instead.

If not, then system returns the SigningMethod = 'WET_SIGNATURE' to the calling object and algorithm ends.
..
	
- If the user has the privilege for signing the documents via OTP (i.e. user has the UC01_149 privilege granted), then system returns the SigningMethod = 'OTP' to the calling object. Otherwise SigningMethod = 'NOT_AVAILABLE' is returned instead. Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[OTP verification (for common contract signing)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9359 - Completely remove sign pad feature
