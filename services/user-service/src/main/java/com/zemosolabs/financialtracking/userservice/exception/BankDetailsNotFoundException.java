package com.zemosolabs.financialtracking.userservice.exception;

public class BankDetailsNotFoundException extends Exception {
    public BankDetailsNotFoundException(String message){
        super(message);
    }
}