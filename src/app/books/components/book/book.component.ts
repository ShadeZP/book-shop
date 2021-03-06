import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IBook, BookCategory } from '../../../modeles/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  @Input() book: IBook;
  @Output() buy = new EventEmitter<IBook>();
  constructor() {
    this.book = {
      name: '',
      description: '',
      price: 0,
      category: BookCategory.detective,
      createDate: 0,
      isAvailable: false,
      id: 0,
    };
  }

  onBuy(book: IBook) {
    if (book) {
      this.buy.emit(book);
    }
  }

  ngOnInit(): void {}
  ngOnChange(): void {}
}
