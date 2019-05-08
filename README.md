# Igpay Atinlay (Pig Latin) Translator 

You should be working through this exercise with a partner! Decide who is "Partner A" and who is "Partner B". 


## For this first part "Partner A" will be typing the code while "Partner B" directs "Partner A" on what code to write. You should still collaborate on possible solutions!
  - Before you get started play around with this [translator](https://lingojam.com/PigLatinTranslator) to familiarize yourself with pig latin.
  - Create a function called `englishToPigLatin` that takes an English `word`. Your function should translate the given English word into Pig Latin. See example below...
      ```
        englishToPigLatin("distance");
          => "istanceday"
        
        englishToPigLatin("friendly");
          => "iendlyfray"
        
        englishToPigLatin("explain");
          => "explainyay"
        
        englishToPigLatin("string");
          => "ingstray"
      ```

## For this first part "Partner B" will be typing the code while "Partner A" directs "Partner B" on what code to write. You should still collaborate on possible solutions!
  - Create a function called `igpayAtinlayOtayEnglishyay` that takes in a word in Pig Latin and returns the word translated into English.
    ```
      igpayAtinlayOtayEnglishyay("istanceday");
        => "distance"
      
      igpayAtinlayOtayEnglishyay("iendlyfray");
        => "friendly"
      
      igpayAtinlayOtayEnglishyay("explainyay");
        => "explain"
      
      igpayAtinlayOtayEnglishyay("ingstray");
        => "string"
    ```

## Extension (can be done solo if you woud like!)
  - Do your functions work for sentences too?
    ```
    
    englishToPigLatin("The store was jammed before the sale could start. The crooked maze failed to fool the mouse.");
      
      => "ethay orestay asway ammedjay eforebay ethay alesay ouldcay artstay. Ethay ookedcray azemay ailedfay otay oolfay ethay ousemay."
    

    igpayAtinlayOtayEnglishyay("ethay orestay asway ammedjay eforebay ethay alesay ouldcay artstay. Ethay ookedcray azemay ailedfay otay oolfay ethay ousemay.");
      
      => "The store was jammed before the sale could start. The crooked maze failed to fool the mouse."
    ```