---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8961 CBL-18782 Masking of PII in PIF"
domain: "Requirements Model"
element_id: 1786031
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9242 Client data masking

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8961 CBL-18782 Masking of PII in PIF

## 📝 Notes

As a user, I will not be able to see client data in application detail unless I have specific rights.

Prosposed solution

	
- switch on applicantDataMaskedByPIF=true


	
- document printouts tab 
- create role BSL_PRINTOUTS (including LDAP) , assign UC01_210_DP to this role
- remove UC01_210_DP from other roles


	
- client documents tab
- create GP HIDE_CLIENT_DOCUMENTS, set to 1 for VN
- create access right  UC01_210_client_documents_tab
- create role BSL_CLIENT_DOCS (including LDAP), assign UC01_210_client_documents_tab to this role
- Application detail -> Client documents tab will be hidden if HIDE_CLIENT_DOCUMENTS=1 and user doesn't have UC01_210_client_documents_tab access right


	
- client address  (client tab)
- create GP HIDE_CLIENT_DATA, set to 1 for VN
- create access right  UC01_210_client_data
- create role BSL_CLIENT_DATA (including LDAP), assign UC01_210_client_data to this role

Application detail -> Client tab -> Contact address and Permanent address - all fields except district and province(region) will be masked if HIDE_CLIENT_DATA=1 and user doesn't have UC01_210_client_data access right

## 🔗 Connections (1)

- → Realisation: [[LOR-8961 CBL-18782 Masking of PII in PIF]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8961 CBL-18782 Masking of PII in PIF
