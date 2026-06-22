---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1097 (CBL-1093) Loan disbursement to any card"
domain: "Requirements Model"
element_id: 1878545
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Update recipient bank data for outgoing payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1097 (CBL-1093) Loan disbursement to any card

## 📝 Notes

Input:

	
- set of Outgoing Payments


For all passed Outgoing Payment where Outgoing Payment->Payment Channel.type {ADD CBL-1093}is in (CA, {/ADD}GBA)
do nothing (bank data for GBA payment channels are always considered as up-to-date{ADD CBL-1093}; CA has no relation to any bank account{/ADD}). 

For all passed Outgoing Payment where Outgoing Payment->Payment Channel.type is in (PBA, SBA):

	
- System groups them by Outgoing Payment->Payment Channel->Salesroom and Outgoing Payment->Payment Channel.type
	
- For each GROUP gets Recipient Name, Bank Account ID, Bank Account Number, Bank Code by Get recipient data for Payment Channel algorithm with parameters: 
- GROUP->Payment Channel.type (i.e. PBA or SBA)
- GROUP->Salesroom.ID 
and set them on all Payment Channels from processed GROUP.

## 🔗 Connections (3)

- → Dependency: [[{MOD}Get recipient data for Payment Channel]]
- → Dependency: [[Requirement3 - Outgoing Payment Orders and Files]]
- ← Dependency: [[{MOD}05.230 Process outgoing payments]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1097 (CBL-1093) Loan disbursement to any card
- Use Case: Process outgoing payments
