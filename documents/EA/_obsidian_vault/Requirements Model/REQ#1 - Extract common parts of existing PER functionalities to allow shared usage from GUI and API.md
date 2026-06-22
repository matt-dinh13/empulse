---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4814 (CLM-1713) Create Web Service for PER Request"
domain: "Requirements Model"
element_id: 1432569
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extract common parts of existing PER functionalities to allow shared usage from GUI and API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4814 (CLM-1713) Create Web Service for PER Request

## 📝 Notes

Calculation of PER Result used for PER preview and PER request creation extracted from existing {MOD}08.050 Show Partial ER preview  to new rules:

	
- {ADD}Calculate Partial ER preview - Step1  - calculation before showing of preview form
	
- {ADD}Calculate Partial ER preview - Step2 -  final calculation after entering of client amount on preview form


Common part of existing {MOD}08.053 Create PER request manually  extracted to new technical UC {ADD}08.051 Create PER request common . PER preview form was updated (new Row Items in the grid).

PER result structure was extended by new attributes used by GUI and API.

{MOD}08.057 Perform Partial early repayment was also updated (fixed usage of Prepayment and added usage of Minimal new PCA).

## 📊 Appears In (1 diagrams)

- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
