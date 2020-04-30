import {Injectable} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import CustomBottomNavEventEmitter from './CustomBottomNavEventEmitter';

@Injectable({
  providedIn: 'root',
})
export class BottomNavService {

  private _breakpointWidth: string;
  private _breakpointChangeEmitterSubscription: Subscription;

  public bottomNavVisible: CustomBottomNavEventEmitter<boolean> = new CustomBottomNavEventEmitter<boolean>();

  constructor(private _breakpointObserver: BreakpointObserver) {
  }

  /**
   * Set a new breakpoint width
   * @param value The breakpoint width
   */
  set breakpointWidth(value: string) {
    if (this._breakpointChangeEmitterSubscription) {
      this._breakpointChangeEmitterSubscription.unsubscribe();
    }

    this._breakpointWidth = value;
    this.startBreakpointObservation();
  }

  /**
   * Start the observation of the breakpoint changes
   */
  startBreakpointObservation(): void {
    const breakpointChangeEmitter$: Observable<BreakpointState> = this._breakpointObserver.observe(`(max-width:${this._breakpointWidth})`);
    this._breakpointChangeEmitterSubscription = breakpointChangeEmitter$.subscribe((breakpoint) => this.handleSizeChange(breakpoint));
  }

  /**
   * Handle the size change events
   * @param breakpoint The breakpoint state
   */
  handleSizeChange(breakpoint: BreakpointState): void {
    this.bottomNavVisible.emit(breakpoint.matches);
  }
}
