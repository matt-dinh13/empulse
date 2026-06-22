---
type: Package
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1224421
diagrams: 0
connections: 0
tags:
  - package
  - _uncategorized
---

# 📁 Feature Guide

> **Type**: Package
> **Package**: N/A

## 📝 Notes

High-level list of supported features with domain model mapping and configuration example is contained in following sections.

Basic Support for Lending (BSL) supports:

## Contract origination
- process starts when client choose commodity to buy and sales agents select suitable product for them. If client is satisfied with loan conditions application is filled in. Then application is send to scoring and if pass contract is created and could be signed by client
## Contract registration
- contract and all other document are sent to HC’s back office, after client sign-off. All documents are verified at HC’s back office. If all verifications pass, documents are scanned and contract is activated
## Contract lifecycle
- usually after contract is activated, process of repayment of contract starts. If contract is successfully repaid the contract is finished. In other cases different processes start. E.g. client notification and collections

System is also supporting many other processes, like
Payments – Incoming/Outgoing 
- processing incoming payments from clients and outgoing payments for partners

Sales Network Management (SNM)
- management of partners and salesrooms (create, update, block, terminate)

Products
- overall product management (creating, updating and deleting products, tariffs, …)

CustomerRelationship Management (CRM)
- management of client <-> HC communication, ticketing system for problems solution
