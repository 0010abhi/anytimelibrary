// import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
// import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { AdminInventoryManagementPanelComponent } from './admin-inventory-management-panel.component';
// import { LibraryService } from '../../assets/InMemoryDb/libraryService';
// import { FilterDataPipe } from '../pipes/bookDataFilter.pipe';

// describe('AdminInventoryManagementPanelComponent', () => {
//   let comp: AdminInventoryManagementPanelComponent;
//   let fixture: ComponentFixture<AdminInventoryManagementPanelComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;
//   let libraryService;
//   beforeEach(() => {
    
//         TestBed.configureTestingModule({
//           declarations: [
//             AdminInventoryManagementPanelComponent
//           ],
//           imports: [
//             HttpClientModule
//           ],
//           providers: [LibraryService, FilterDataPipe],
//           schemas: [NO_ERRORS_SCHEMA]
//         })
//           .compileComponents()
//           .then(() => {
//             fixture = TestBed.createComponent(AdminInventoryManagementPanelComponent); //returns a ComponentFixture
//             //The fixture provides access to the component instance itself 
//             //and to the DebugElement, which is a handle on the component's DOM element.
//             comp = fixture.componentInstance; // BannerComponent test instance
//             de = fixture.debugElement; // throught this we can handle dom element.
//             el = de.nativeElement;
//             libraryService = TestBed.get(LibraryService);
//           });
//       });

//   it('should not call service methods before OnInit', () => {
//     expect(libraryService).toBeDefined();
//   });

// //   it('should call service methods after initialized', () => {
// //     getInitSpy = spyOn(comp, 'getInitData');
// //     fixture.detectChanges();
// //     expect(getInitSpy).toHaveBeenCalled();
// //   });
  
// });

