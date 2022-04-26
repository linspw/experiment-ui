import { Mask } from '../mask';
import { maskDictionary } from '../mask-dictionary';

describe('Mask test', () => {
  describe('Telefone', () => {
    it('Mascara corretamente o telefone', () => {
      const number = '99999999999';
      const result = Mask('phone').masked(number);

      expect(result).toBe('(99) 9 9999-9999');
      expect(result).toHaveLength(16);
    });

    it('Mascara e desmascara o telefone de 11 digitos', () => {
      const number = '99999999999';
      const mask = Mask('phone');
      const maskedResult = mask.masked(number);
      const unmaskedResult = mask.unmasked(maskedResult);

      expect(mask.pattern.mask).toBe(maskDictionary.phone.mask);
      expect(maskedResult).toBe('(99) 9 9999-9999');
      expect(unmaskedResult).toBe(number);
      expect(unmaskedResult).toHaveLength(11);
    });

    it('Mascara e desmascara o telefone de 10 digitos', () => {
      const number = '9999999999';
      const mask = Mask('phone');
      const maskedResult = mask.masked(number);
      const unmaskedResult = mask.unmasked(maskedResult);

      expect(mask.pattern.mask).toBe(maskDictionary.phone.mask);
      expect(maskedResult).toBe('(99) 9999-9999');
      expect(unmaskedResult).toBe(number);
      expect(unmaskedResult).toHaveLength(10);
    });

    it('Mascara e desmascara passando do limite', () => {
      const number = '99999999999999';
      const numberExpected = '99999999999';

      const mask = Mask('phone');
      const maskedResult = mask.masked(number);
      const unmaskedResult = mask.unmasked(maskedResult);

      expect(mask.pattern.mask).toBe(maskDictionary.phone.mask);
      expect(maskedResult).toBe('(99) 9 9999-9999');
      expect(unmaskedResult).toBe(numberExpected);
      expect(unmaskedResult).toHaveLength(11);
    });
  });

  describe('CNPJ', () => {
    it('Mascara corretamente o cnpj', () => {
      const number = '70389858000175';
      const result = Mask('cnpj').masked(number);

      expect(result).toBe('70.389.858/0001-75');
      expect(result).toHaveLength(18);
    });

    it('Mascara e desmascara', () => {
      const number = '70389858000175';
      const mask = Mask('cnpj');
      const maskedResult = mask.masked(number);
      const unmaskedResult = mask.unmasked(maskedResult);

      expect(mask.pattern.mask).toBe(maskDictionary.cnpj.mask);
      expect(maskedResult).toBe('70.389.858/0001-75');
      expect(unmaskedResult).toBe(number);
      expect(unmaskedResult).toHaveLength(14);
    });
  });

  describe('CEP', () => {
    it('Mascara corretamente o cep', () => {
      const number = '79093000';
      const result = Mask('cep').masked(number);

      expect(result).toBe('79093-000');
      expect(result).toHaveLength(9);
    });

    it('Mascara e desmascara', () => {
      const number = '79093000';
      const mask = Mask('cep');
      const maskedResult = mask.masked(number);
      const unmaskedResult = mask.unmasked(maskedResult);

      expect(mask.pattern.mask).toBe(maskDictionary.cep.mask);
      expect(maskedResult).toBe('79093-000');
      expect(unmaskedResult).toBe(number);
      expect(unmaskedResult).toHaveLength(8);
    });
  });
});
