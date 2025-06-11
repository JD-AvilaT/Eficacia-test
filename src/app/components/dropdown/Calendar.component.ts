import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isSameMonth, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'storybook-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Calendar.component.html',
  styleUrls: ['./Calendar.component.scss'],
})
export class CalendarComponent {
  currentDate = new Date();
  selectedDate: Date | null = null;
  days: Date[] = [];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const start = startOfWeek(startOfMonth(this.currentDate), { locale: es, weekStartsOn: 1 }); // semana inicia en lunes
    const end = endOfWeek(endOfMonth(this.currentDate), { locale: es, weekStartsOn: 1 });
    this.days = eachDayOfInterval({ start, end });
  }

  previousMonth() {
    this.currentDate = subMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentDate = addMonths(this.currentDate, 1);
    this.generateCalendar();
  }

  selectDate(day: Date) {
    this.selectedDate = day;
  }

  formatDay(day: Date): string {
    return format(day, 'dd', { locale: es });
  }

  formatMonthYear(date: Date): string {
    return format(date, 'MMMM yyyy', { locale: es });
  }

  isSelected(day: Date): boolean {
    return this.selectedDate ? isSameDay(this.selectedDate, day) : false;
  }

  isCurrentMonth(day: Date): boolean {
    return isSameMonth(day, this.currentDate);
  }
}
