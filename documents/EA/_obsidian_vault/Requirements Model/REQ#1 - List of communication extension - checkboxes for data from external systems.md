---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9201 (CLM-2831) Adjust visibility of external data in Comm.list"
domain: "Requirements Model"
element_id: 1512288
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - List of communication extension - checkboxes for data from external systems

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9201 (CLM-2831) Adjust visibility of external data in Comm.list

## 📝 Notes

ID requires to hide data from CCH by default but keep a possibility to show it on request.
It is implemented in general way by a new set of checkboxes (one checkbox for each system - BSL, MSS, LCS, CCH, VBOT) so user can select from which system data is loaded.

Visibility and default status of checkboxes are driven by new global parameter COMM_HIST_SELECTED_SYSTEMS.
If it is not defined (empty) then checkboxes are hidden and all systems is used (as before).
If the list of systems is defined, then checkboxes are visible (see visibility condition for each checkbox) and only checkboxes defined in the list is checked by default.

Default setting:
COMM_HIST_SELECTED_SYSTEMS  = empty

Setting for ID:
COMM_HIST_SELECTED_SYSTEMS = BSL,MSS

## 📊 Appears In (1 diagrams)

- Custom: CBL-9201 (CLM-2831) Adjust visibility of external data in Comm.list
