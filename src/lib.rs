use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::near_bindgen;


#[near_bindgen]
#[derive(Default, BorshDeserialize, BorshSerialize)]
pub struct Contract {
  cevap: i32,
}

#[near_bindgen]
impl Contract {
  pub fn sayi(&self) -> i32 {
    return self.cevap;
  }

  pub fn topla(&mut self, a: i32, b: i32) {
      self.cevap = a+b;
  }

  pub fn cikar(&mut self, a: i32, b: i32) {
    self.cevap = a-b;
  }

pub fn bolme(&mut self, a: i32, b: i32) {
  self.cevap = a/b;
  }

pub fn carpma(&mut self, a: i32, b: i32) {
  self.cevap = a*b;
  }


}