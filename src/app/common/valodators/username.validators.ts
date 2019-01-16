import { AbstractControl,ValidationErrors } from '@angular/forms';

export class UserNameValidators {
    static cannotContainSpace(control:AbstractControl): ValidationErrors| null{
        if((control.value as string).indexOf(' ') >=0)
            return {cannotContainSpace:true};
        else    
            return null;        
    }

    static shouldBeUnique (control:AbstractControl):ValidationErrors | null {
        setTimeout(()=>{
            console.log('ok');

            if((control.value as string)=="Shahid")
                return {shouldBeUnique:true};
            else
                null;
        },2000);
        return null;
    }
}