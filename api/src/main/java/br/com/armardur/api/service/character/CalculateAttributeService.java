package br.com.armardur.api.service.character;

import org.springframework.stereotype.Service;

@Service
public class CalculateAttributeService {

    private static final int DISCOUNT = 10;
    private static final int DIVISION = 2;

    public int calculateMod(int value) {
        return (value - DISCOUNT) / DIVISION;
    }

    public int calculateArmorClass(int constitution) {
        return DISCOUNT + this.calculateMod(constitution);
    }
}
